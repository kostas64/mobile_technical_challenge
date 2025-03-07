import { StatusBar } from "react-native";
import Cities from "../components/Cities";
import Header from "../components/Header";
import { Colors } from "../../assets/Colors";
import { FlatList, StyleSheet } from "react-native";

const HomeScreen = () => {
  const getContent = () => {
    return (
      <>
        <Header />
        <Cities />
      </>
    );
  };

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <FlatList
        ListHeaderComponent={getContent()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
});

export default HomeScreen;
