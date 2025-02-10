import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { FIREBASE_DB } from "@/firebaseConfig";

type ItemsListProps = {
  colletionName: string;
  renderItem: (item: any) => JSX.Element; // Expect a function that returns JSX
  itemsNum?: number;
};

const ItemsList: React.FC<ItemsListProps> = ({
  colletionName,
  renderItem,
  itemsNum,
}) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const itemsRef = collection(FIREBASE_DB, colletionName);

    const subscriber = onSnapshot(itemsRef, {
      next: (snapshot) => {
        const items: any[] = [];

        if (itemsNum) {
          for (let index = 0; index < itemsNum; index++) {
            const element = snapshot.docs.at(index);
            if (element) {
              items.push({
                id: element.id,
                ...element.data(),
              });
            }
          }
        } else {
          snapshot.docs.forEach((doc) => {
            items.push({
              id: doc.id,
              ...doc.data(),
            });
          });
        }

        setItems(items);
      },
    });

    return () => subscriber();
  }, [colletionName, itemsNum]); // ✅ Include `itemsNum` as a dependency

  return (
    <View style={styles.itemsContainer}>
      {items.map((item) => renderItem(item))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemsContainer: {
    gap: 32,
  },
});

export default ItemsList;
