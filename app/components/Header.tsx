import { Text, View, StyleSheet } from "react-native";
import HorizontalLine from "./HorizontalLine";

interface PageHeaderProps {
  title: string;
  pageNumber: string;
}

function PageHeader({ title, pageNumber }: PageHeaderProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.centerText}>{title}</Text>
        <Text style={styles.rightText}>{pageNumber}</Text>
      </View>
      <HorizontalLine />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  centerText: {
    textAlign: "center",
    fontSize: 22
  },
  rightText: {
    textAlign: "right",
    fontSize: 22
  },
})

export default PageHeader;
