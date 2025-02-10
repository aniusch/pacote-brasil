import { StyleSheet } from "react-native";

export const GStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#d7961d",
    margin: 24,
    textAlign: "center",
    marginHorizontal: 48,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#0d3439",
    margin: 24,
    textAlign: "center",
    marginHorizontal: 48,
  },
  links: {
    fontSize: 20,
    fontWeight: "700",
    color: "#D7961D",
    textAlign: "center",
    width: 269,
  },
  linksContainer: {
    justifyContent: "flex-end",
    paddingBottom: 24,
    gap: 16,
  },
});
