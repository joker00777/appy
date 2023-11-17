import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem,
  GestureResponderEvent,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Formik, FormikProps } from "formik";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input";
import Top from "../../src/components/Top";
import { colors } from "../../src/design/color";
import {
  IncomeType,
  ResponseType,
} from "../../types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useMutation } from "@tanstack/react-query";
import { PostDebt, PostIncome } from "../../api";
import Down from "../../src/assets/icon/down-green.svg";

const data = [
  { label: "Salary", value: "salary" },
  { label: "Property", value: "property" },
  { label: "Business", value: "business" },
  { label: "Capital Gain", value: "capital_gain" },
  { label: "Other Sources", value: "other" },
];

const timeDurationOptions = [
  { label: "Monthly", value: "monthly" },
  { label: "Annualy", value: "annualy" },
];

export default function Debts() {
  const [totalIncome, settotalIncome] = React.useState<number>(0);
  const initialValue: IncomeType = {
    name: "",
    amount: 0.0,
    duration: "monthly",
    type: "",
  };
  const formikRef = React.useRef<FormikProps<typeof initialValue>>(null);

  const [type, setType] = React.useState<string>("");
  const [isFocus, setIsFocus] = React.useState(false);
  const [timeDuration, setTimeDuration] = React.useState("");
  const [isTimeFocused, setIsTimeFocused] = React.useState(false);

  const renderLabel = () => {
    if (type || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Income Type
        </Text>
      );
    }
    return null;
  };
  const renderTimeLabel = () => {
    if (timeDuration || isTimeFocused) {
      return (
        <Text style={[styles.label, isTimeFocused && { color: "blue" }]}>
          Time span
        </Text>
      );
    }
    return null;
  };

  const navigateBack = React.useCallback(() => {
    router.push("/home");
  }, [router]);

  // const navigateToDebt = React.useCallback(
  //   (item: GestureResponderEvent) => {
  //     console.log("iiiiiiiiiiiiiiiii", item);
  //     // router.push(`/debt/${item.}`);
  //   },
  //   [router]
  // );

  const currencyFormatter = (value: number) => {
    const IndianFormatter = new Intl.NumberFormat("en-IN");
    return IndianFormatter.format(value);
  };

  // const renderSingleDebt = React.useCallback<ListRenderItem<DebtListItemType>>(
  //   ({ item }) => {
  //     return (
  //       <View
  //         style={{
  //           justifyContent: "space-between",
  //           padding: 10,
  //           flexDirection: "row",
  //           flexWrap: "wrap",
  //           shadowColor: colors.debt,
  //           shadowOffset: { width: -2, height: 4 },
  //           shadowOpacity: 0.2,
  //           shadowRadius: 3,
  //           backgroundColor: "#C6C6C6",
  //           borderRadius: 14,
  //           paddingTop: 10,
  //           paddingBottom: 10,
  //           marginVertical: 10,
  //         }}
  //       >
  //         <Text style={{ fontSize: 20 }}>{item.name}</Text>
  //         <Text
  //           style={{
  //             fontSize: 20,
  //             color: colors.debt,
  //             // textDecorationLine: "underline",
  //           }}
  //           key={item.id}
  //           onPress={navigateToDebt}
  //         >
  //           {item.present_value}
  //         </Text>
  //         {/* </View> */}
  //       </View>
  //     );
  //     // return <Item key={item?.id} segment={item} onPress={onPress} />;
  //   },
  //   []
  // );

  const create = useMutation<ResponseType, unknown, IncomeType>({
    mutationFn: PostIncome,
  });

  const handleCreateIncome = React.useCallback(
    (income: IncomeType) => {
      console.log("uuuuuuuuuuuuuuuuuuuuuuuuuu", income);
      create.mutateAsync(income).then((data: ResponseType) => {
        console.log("ddddddddddddddddddddddddd", data);
      });
    },
    [router]
  );

  return (
    <View style={{ backgroundColor: "#00A86B", flex: 1 }}>
      <View>
        <Top text="Income" textColor="white" navigateBack={navigateBack}></Top>
        <View style={{ paddingTop: 90, paddingLeft: 30, paddingBottom: 40 }}>
          <Text style={{ color: "white", fontSize: 15, paddingBottom: 5 }}>
            How much
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 35,
            }}
          >
            ₹ {currencyFormatter(totalIncome)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          backgroundColor: "white",
          elevation: 10,
          borderRadius: 50,
        }}
      >
        <Formik
          initialValues={initialValue}
          onSubmit={handleCreateIncome}
          // validationSchema={validationSchema}
          validateOnMount
          validateOnChange
          innerRef={formikRef}
        >
          {/* fields needed -> name,type,principal,current_amount,
          amount_paid=principal-current_amount
          ,interest,total_duration,duration_left */}
          <View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 50,
              }}
            >
              <View
                style={{
                  borderColor: "#CDCDDB",
                  borderWidth: 1,
                  borderRadius: 15,
                  marginLeft: 10,
                  marginRight: 10,
                  width: "50%",
                }}
              >
                <Input placeholder="Name" name="name" style={{ padding: 10 }} />
              </View>
              <View
                style={{
                  borderColor: "#CDCDDB",
                  borderWidth: 1,
                  borderRadius: 15,
                  marginLeft: 10,
                  marginRight: 10,
                  width: "35%",
                }}
              >
                <Input
                  placeholder="Income"
                  name="amount"
                  style={{ padding: 10 }}
                />
              </View>
            </View>
            <View style={styles.container}>
              {renderTimeLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={timeDurationOptions}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isTimeFocused ? "Time span" : "..."}
                searchPlaceholder="Search..."
                value={timeDuration}
                onFocus={() => setIsTimeFocused(true)}
                onBlur={() => setIsTimeFocused(false)}
                onChange={(item) => {
                  setTimeDuration(item.value);
                  setIsTimeFocused(false);
                  formikRef.current?.handleChange?.("duration")?.(item.value);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isTimeFocused ? "blue" : "black"}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Income Type" : "..."}
                searchPlaceholder="Search..."
                value={type}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setType(item.value);
                  setIsFocus(false);
                  formikRef.current?.handleChange?.("type")?.(item.value);
                }}
                renderLeftIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={isFocus ? "blue" : "black"}
                    name="Safety"
                    size={20}
                  />
                )}
              />
            </View>
            <Button
              text="Create"
              style={{
                // backgroundColor: "#7F3DFF",
                borderRadius: 15,
                marginTop: 50,
                marginLeft: 10,
                marginRight: 10,
                height: 56,
                width: 380,
                shadowColor: "#52006A",
                elevation: 4,
              }}
              type="primary"
            />
          </View>
        </Formik>
        <ScrollView>
          <View
            style={{
              justifyContent: "space-between",
              marginTop: 50,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <View>
              <Down style={{ marginBottom: 10 }} />
              <Down />
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  textAlign: "center",
                  color: "#91919F",
                }}
              >
                Manage Incomes
              </Text>
            </View>

            <View>
              <Down style={{ marginBottom: 10 }} />
              <Down />
            </View>
          </View>
        </ScrollView>

        {/* <Text>Hello</Text> */}
        {/* add a debt ka option and niche manage debts ka buttons */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

// white walle ke piche agar red circles honge toh acha lagega..............
