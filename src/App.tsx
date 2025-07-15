import React, { useState } from 'react';
import SkillPointsTracker from './components/SkillPointsTracker';

const App: React.FC = () => {
  const maxLevel = 300;
  const initialSkillPoints = maxLevel - 1;
  const [skillPoints, setSkillPoints] = useState(initialSkillPoints);
  const [attributeLevels, setAttributeLevels] = useState<Record<string, number>>({
    Perception: 1,
    Strength: 1,
    Fortitude: 1,
    Agility: 1,
    Intellect: 1,
  });
  const [perkLevels, setPerkLevels] = useState<Record<string, number>>({});

  return (
    <SkillPointsTracker
      skillPoints={skillPoints}
      characterLevel={1 + (maxLevel - initialSkillPoints)}
      setSkillPoints={setSkillPoints}
      setAttributeLevels={setAttributeLevels}
      setPerkLevels={setPerkLevels}
    />
  );
};

export default App;