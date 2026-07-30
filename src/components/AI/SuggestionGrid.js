import React from 'react';
import { FlatList } from 'react-native';

import SuggestionChip from './SuggestionChip';
import suggestions from '../../data/assistantSuggestion';

const SuggestionGrid = () => {
  return (
    <FlatList
      scrollEnabled={false}
      numColumns={2}
      data={suggestions}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <SuggestionChip item={item} />}
    />
  );
};

export default SuggestionGrid;
