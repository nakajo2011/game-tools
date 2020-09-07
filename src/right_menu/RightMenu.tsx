import React from 'react';
import DeckSettings from './DeckSettings';
import DeckInfos from './DeckInfos';

export default function RightMenu() {
  return (
    <div>
      <DeckSettings/>
      <DeckInfos/>
    </div>
  );
}