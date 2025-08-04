import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import RnRangeSlider from 'rn-range-slider';
import {COLORS} from '../styles';
const Rail = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'lightgrey',
        height: 2,
        borderRadius: 5,
      }}></View>
  );
};

const RailSelected = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: COLORS.primary,
        height: 2,
        borderRadius: 5,
      }}></View>
  );
};

const Thumb = () => {
  return (
    <View
      style={{
        width: 13,
        height: 13,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        // borderWidth: 3,
        // borderColor: COLORS.primary,
      }}></View>
  );
};

const RangeSliderH = ({
  values,
  onChange,
}: {
  values: [number, number];
  onChange: [any, any];
}) => {
  const [heightMin, heightMax] = values;
  const [setHeightMin, setHeightMax] = onChange;
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  // const renderLabel = useCallback(value => <Label text={value}/>, []);
  // const renderNotch = useCallback(() => <Notch/>, []);
  const handleValueChange = useCallback((low: any, high: any) => {
    setHeightMin(low);
    setHeightMax(high);
  }, []);

  return (
    <RnRangeSlider
      style={styles.slider}
      min={140}
      max={200}
      step={2}
      low={heightMin}
      high={heightMax}
      floatingLabel
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      // renderLabel={renderLabel}
      // renderNotch={renderNotch}
      onValueChanged={handleValueChange}
    />
  );
};

export default RangeSliderH;

const styles = StyleSheet.create({
  slider: {
    width: '100%',
    height: 10,
    marginTop: 15,
  },
});
