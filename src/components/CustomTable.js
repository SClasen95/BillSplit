import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const CustomTable = ({ data,tableHead }) => {
  // Define the table headers

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        {data.map((personData, index) => (
          <Row
            key={index}
            data={[
              personData.person,
              personData.product,
              personData.price,
              personData.quantity,
            ]}
            style={[
              styles.row,
              index % 2 && { backgroundColor: '#F7F6E7' },
            ]}
            textStyle={styles.text}
          />
        ))}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
  row: { height: 40 },
});

export default React.memo(CustomTable);
