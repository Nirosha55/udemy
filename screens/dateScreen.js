import React, {useState} from 'react';
import {View, DatePicker} from 'react-native';

const DateScreen = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <View>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        //  maxDate={addMonths(new Date(), 5)}
        showDisabledMonthNavigation
      />
    </View>
  );
};
export default DateScreen;
