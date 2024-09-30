import React, { useState } from "react";
import { TabView } from "react-native-tab-view";
import { StyleSheet, useWindowDimensions } from "react-native";
import MedicalAppointmentScreen from "../screens/MedicalAppointmentScreen";
import AboutDoctorScreen from "../screens/AboutDoctorScreen";

const SubTabView = ({ route }) => {
  const { doctor } = route.params;
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Medical Appointments" },
    { key: "second", title: "About Doctor" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <MedicalAppointmentScreen doctor={doctor} />;
      case "second":
        return <AboutDoctorScreen doctor={doctor} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={styles.tabView}
    />
  );
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
  },
});

export default SubTabView;
