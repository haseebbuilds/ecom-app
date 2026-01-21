import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Empty fields check
    if (email.trim() === '' || password.trim() === '') {
      setError('Email && password are required');
      return;
    }

    // Email validation
    if (!email.includes('@gmail.com')) {
      setError('Please enter valid email');
      return;
    }

    // Clear error & login
    setError('');
    onLogin();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sarim Electronics</Text>
        <Text style={styles.subtitle}>Welcome Back</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 50,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#6A4CE1',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default LoginScreen;
