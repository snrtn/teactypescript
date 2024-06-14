import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import AgentSideTab from './agentSideTab';
import {
	Container,
	ContentBox,
	IofoDesc,
	InfoBox,
	BackgroundImage,
	PortraitImage,
	RoleBox,
} from './agentDetail.styles';

interface AgentDetailsProps {
	agentName?: string;
	tab?: string;
}

const AgentDetail: React.FC<AgentDetailsProps> = ({ agentName, tab }) => {
	const agents = useSelector((state: any) => state.agents.agents);
	const decodedAgentName = decodeURIComponent(agentName || '');
	const agent = agents.find((agent: any) => agent.displayName === decodedAgentName);

	if (!agent) {
		return <p>Agent not found: {decodedAgentName}</p>;
	}

	const handleTabChange = (newTab: string) => {
		console.log(`Tab changed to: ${newTab}`);
	};

	const renderTabContent = () => {
		if (tab === 'info' || !tab) {
			return (
				<ContentBox agent={agent}>
					<InfoBox>
						<BackgroundImage src={agent.background} alt='Background' />
						<PortraitImage src={agent.fullPortrait} alt={agent.displayName} />
					</InfoBox>
					<IofoDesc>
						<h1>
							<strong>{agent.displayName}</strong>
						</h1>
						<h2>
							<strong>{agent.description}</strong>
						</h2>
						{agent.characterTags && (
							<p>
								<strong>{agent.characterTags.join(', ')}</strong>
							</p>
						)}
						<RoleBox>
							<img src={agent.role?.displayIcon} alt={agent.role?.displayName} width='50' height='50' />
							<Box ml={2}>
								<h3>
									<strong>{agent.role?.displayName}</strong>
								</h3>
								<h3>
									<strong>{agent.role?.description}</strong>
								</h3>
							</Box>
						</RoleBox>
					</IofoDesc>
				</ContentBox>
			);
		}

		const ability = agent.abilities.find((ability: any) => ability.displayName === tab);

		return (
			<ContentBox agent={agent}>
				<h1>{ability?.displayName}</h1>
				<img src={ability?.displayIcon} alt={ability?.displayName} width='50' height='50' />
				<h2>{ability?.description}</h2>
			</ContentBox>
		);
	};

	return (
		<Container>
			<Box sx={{ flex: 1 }}>{renderTabContent()}</Box>
			<AgentSideTab abilities={agent.abilities} onTabChange={handleTabChange} />
		</Container>
	);
};

export default AgentDetail;
