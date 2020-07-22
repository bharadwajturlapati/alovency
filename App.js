import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Header, ListItem } from "react-native-elements";
import CategoryHeader from "./components/CategoryHeader";
import FloatingActionButton from "./components/FloatingActionButton";
import SideMenu from "react-native-side-menu";
import DrawerMenu from "./components/DrawerMenu";

/*
Expenses array looks like this
[
  {
    "amount" : 200,
    "description" : "food for day 11"
  }
]
*/

const expensesList = [
  {
    amount: 200,
    description: "food for day 11",
    created_date: "12-05-2020",
    updated_date: "12-05-2020",
  },
  {
    amount: 200,
    description: "food for day 12",
    created_date: "12-05-2020",
    updated_date: "12-05-2020",
  },
];

const toString = (val) => val.toString();

export default function App() {
  return (
    <SideMenu menu={<DrawerMenu></DrawerMenu>}>
      <SafeAreaView style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Header
            placement="left"
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "Alovency", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
        </View>
        <View style={styles.SummaryContainer}>
          <CategoryHeader></CategoryHeader>
        </View>
        <View style={styles.ListContainer}>
          {expensesList.map((l, i) => (
            <ListItem
              key={i}
              rightTitle={toString(l.amount)}
              title={l.description}
              subtitle={l.updated_date}
              bottomDivider
            />
          ))}
        </View>
        <FloatingActionButton></FloatingActionButton>
      </SafeAreaView>
    </SideMenu>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  HeaderContainer: {
    flex: 0.1,
  },
  SummaryContainer: {
    flex: 0.1,
  },
  ListContainer: {
    flex: 0.8,
    borderWidth: 1,
  },
});
