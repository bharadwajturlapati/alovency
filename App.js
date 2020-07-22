import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Alert } from "react-native";
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

const expense = {
  month: "october",
  year: "2019",
  totalAmount: 1000,
  expensesList: [
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
  ],
};

const toString = (val) => val.toString();

const calcAmountUsed = (totalVal, currentVal) => {
  amount: totalVal.amount + currentVal.amount;
};

const inlineStyles = {
  HeaderContainerDataStyle: {
    leftComponent: { icon: "menu", color: "#fff" },
    centerComponent: { text: "Alovency", style: { color: "#fff" } },
    rightComponent: { icon: "home", color: "#fff" },
  },
};

export default function App() {
  let totalAmount = 0;
  expense.expensesList.forEach((eachSpend) => {
    totalAmount += eachSpend.amount;
  });
  const [spendAmount, setSpendAmount] = useState(totalAmount);

  return (
    <SideMenu menu={<DrawerMenu></DrawerMenu>}>
      <SafeAreaView style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Header
            placement="left"
            leftComponent={inlineStyles.HeaderContainerDataStyle.leftComponent}
            centerComponent={
              inlineStyles.HeaderContainerDataStyle.centerComponent
            }
            rightComponent={
              inlineStyles.HeaderContainerDataStyle.rightComponent
            }
          />
        </View>
        <View style={styles.SummaryContainer}>
          <CategoryHeader
            month={expense.month}
            year={expense.year}
            amountUsed={spendAmount}
            totalAmount={expense.totalAmount}
          ></CategoryHeader>
        </View>
        <View style={styles.ListContainer}>
          {expense.expensesList.map((l, i) => (
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
