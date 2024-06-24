import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { SupportLink } from 'src/components/common';
import { Colors } from 'src/theme/Colors';
import { Size } from 'src/theme/Size';

import { ChecklistError, ChecklistPoints } from '../../../constants';
import ChecklistPoint from './ChecklistPoint';

interface Props {
  lastPointCompleted: ChecklistPoints;
  checklistError?: ChecklistError;
}

export const CHECKLIST_LABELS = [
  'Connecting Base to WiFi',
  'Registering Base with FluentPet servers',
  'Disconnecting from Base',
  'Confirming Base registration (up to 60s)',
];

const ConnectionChecklist: React.FC<Props> = ({
  lastPointCompleted,
  checklistError,
}) => (
  <View style={styles.checklistContainer}>
    <View style={styles.checklistLoaderContainer}>
      {!checklistError && <ActivityIndicator color={Colors.PRIMARY_DARK} />}
    </View>
    {CHECKLIST_LABELS.map((label, idx) => {
      const currentPointNumber = idx + 1;
      const errorMessage =
        idx === lastPointCompleted && checklistError?.message
          ? checklistError.message
          : '';

      return (
        <View key={label}>
          <ChecklistPoint
            label={label}
            pointNumber={currentPointNumber}
            isCompleted={lastPointCompleted >= currentPointNumber}
            isFinalPoint={CHECKLIST_LABELS.length === currentPointNumber}
            errorMessage={errorMessage}
          />
        </View>
      );
    })}
    <SupportLink linkName="registerBase" />
  </View>
);

export default ConnectionChecklist;

const styles = StyleSheet.create({
  checklistContainer: {
    flex: 1,
    width: '100%',
  },
  checklistLoaderContainer: {
    alignItems: 'center',
    marginVertical: Size.L,
  },
});
