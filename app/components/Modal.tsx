import {
  View,
  ModalProps,
  Modal as RMModal,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";

type TModalProps = ModalProps & {
  isOpen: boolean;
  hasInput: boolean;
};

export default function Modal({
  isOpen,
  hasInput,
  children,
  ...rest
}: TModalProps) {
  const content = hasInput ? (
    <KeyboardAvoidingView
      style={styles.overlay}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View style={styles.overlay}>{children}</View>
  );

  return (
    <RMModal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      {content}
    </RMModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

/*
  contentContainer: {
      width: "80%",
      maxWidth: 400,
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
  },
  */
