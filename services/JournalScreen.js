import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../services/firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const JournalScreen = () => {
  const { user } = useContext(AuthContext);
  const [entry, setEntry] = useState('');

  const saveEntry = async () => {
    if (!entry.trim()) {
      Alert.alert('Fehler', 'Das Tagebuchfeld darf nicht leer sein.');
      return;
    }
    try {
      await db.collection('journal_entries').add({
        user_id: user.uid,
        date: new Date(),
        content: entry,
      });
      Alert.alert('Erfolg', 'Eintrag gespeichert!');
      setEntry('');
    } catch (error) {
      Alert.alert('Fehler', 'Eintrag konnte nicht gespeichert werden.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Schreibe deine Gedanken hier..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />
      <Button title="Speichern" onPress={saveEntry} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4faff',
  },
  textInput: {
    borderColor: '#b3d9ff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
});

export default JournalScreen;
