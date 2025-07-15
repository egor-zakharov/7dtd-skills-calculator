import React, { useState } from 'react';
import SkillsCalculator from './SkillsCalculator';

const backgroundImage = './assets/background.jpg';

interface SkillPointsTrackerProps {
  skillPoints: number;
  characterLevel: number;
  setSkillPoints: (updateFn: (prev: number) => number) => void;
  setAttributeLevels: (levels: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => void;
  setPerkLevels: (levels: Record<string, number> | ((prev: Record<string, number>) => Record<string, number>)) => void;
}

const SkillPointsTracker: React.FC<SkillPointsTrackerProps> = ({ skillPoints, setSkillPoints, setAttributeLevels }) => {
  const [perkLevels, setLocalPerkLevels] = useState<Record<string, number>>({});

  return (
    <div className="skill-points-tracker">
      <div className="overlay"></div>
      <SkillsCalculator
        skillPoints={skillPoints}
        setSkillPoints={setSkillPoints}
        setAttributeLevels={setAttributeLevels}
        setPerkLevels={setLocalPerkLevels}
        perkLevels={perkLevels}
      />
    </div>
  );
};

export default React.memo(SkillPointsTracker);