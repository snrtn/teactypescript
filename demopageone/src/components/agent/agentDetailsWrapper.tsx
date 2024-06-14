import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import AgentDetail from './agentDetail';

const AgentDetailsWrapper: React.FC = () => {
	const { agentName, tab } = useParams<{ agentName: string; tab?: string }>();
	const navigate = useNavigate();
	const agents = useSelector((state: any) => state.agents.agents);

	const sortedAgents = [...agents].sort((a, b) => a.displayName.localeCompare(b.displayName));
	let agent = sortedAgents.find((agent: any) => agent.displayName === agentName);

	if (!agentName || !agent) {
		agent = sortedAgents[0];
		if (!agentName) {
			navigate(`/agent/${agent.displayName}`);
		}
	}

	if (!agent) {
		return <p>No agents available</p>;
	}

	return <AgentDetail agentName={agent.displayName} tab={tab ? decodeURIComponent(tab) : undefined} />;
};

export default AgentDetailsWrapper;
