import React from 'react';
import { useSelector } from 'react-redux';
import { useAgents } from '../queries/agents';

const AgentPage: React.FC = () => {
	const agents = useSelector((state: any) => state.agents.agents);
	const { isLoading: agentsLoading } = useAgents();

	const sortedAgents = agents.slice().sort((a: any, b: any) => a.displayName.localeCompare(b.displayName));

	return (
		<div>
			{agentsLoading ? (
				<p>Loading...</p>
			) : (
				<>
					{sortedAgents.map((agent: any, index: number) => {
						if (agent.displayName === 'Sova' && index < sortedAgents.length - 1) {
							return null;
						}

						return (
							<div key={agent.uuid} style={{ marginBottom: '20px' }}>
								<img src={agent.displayIcon} alt={agent.displayName} width='50' height='50' />
								<h2>{agent.displayName}</h2>
								<p>
									<strong>Description:</strong> {agent.description}
								</p>
								<p>
									<strong>Developer Name:</strong> {agent.developerName}
								</p>
								{agent.characterTags && (
									<p>
										<strong>Character Tags:</strong> {agent.characterTags.join(', ')}
									</p>
								)}
								<div>
									<img src={agent.fullPortrait} alt={agent.displayName} width='200' />
								</div>
								<p>
									<strong>Role:</strong> {agent.role?.displayName}
								</p>
								<p>
									<strong>Role Description:</strong> {agent.role?.description}
								</p>
								<div>
									<img src={agent.role?.displayIcon} alt={agent.role?.displayName} width='50' height='50' />
								</div>
								<h3>Abilities</h3>
								<ul>
									{agent.abilities.map((ability: any, index: number) => (
										<li key={index} style={{ marginBottom: '10px' }}>
											<img src={ability.displayIcon} alt={ability.displayName} width='30' height='30' />
											<p>
												<strong>{ability.displayName}:</strong> {ability.description}
											</p>
										</li>
									))}
								</ul>
								<p>
									<strong>Background:</strong> <img src={agent.background} alt='Background' width='300' />
								</p>
								<p>
									<strong>Background Gradient Colors:</strong> {agent.backgroundGradientColors.join(', ')}
								</p>
								<p>
									<strong>Asset Path:</strong> {agent.assetPath}
								</p>
								<p>
									<strong>Is Full Portrait Right Facing:</strong> {agent.isFullPortraitRightFacing ? 'Yes' : 'No'}
								</p>
								<p>
									<strong>Is Playable Character:</strong> {agent.isPlayableCharacter ? 'Yes' : 'No'}
								</p>
								<p>
									<strong>Is Available for Test:</strong> {agent.isAvailableForTest ? 'Yes' : 'No'}
								</p>
								<p>
									<strong>Is Base Content:</strong> {agent.isBaseContent ? 'Yes' : 'No'}
								</p>
							</div>
						);
					})}
				</>
			)}
		</div>
	);
};

export default AgentPage;
