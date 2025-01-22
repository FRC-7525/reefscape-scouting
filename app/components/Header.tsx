import { Text, View, StyleSheet } from "react-native";

interface PageHeaderProps {
  title: string;
  pageNumber: string;
}

function PageHeader({ title, pageNumber }: PageHeaderProps) {
  return (
    <View style={styles.header}>
      <Text></Text>
      <Text style={styles.centerText}>{title}</Text>
      <Text style={styles.rightText}>{pageNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flex: 0.1,
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
