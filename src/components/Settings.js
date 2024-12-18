import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Divider
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = ({ open, onClose }) => {
  const [settings, setSettings] = useState({
    name: '',
    age: '',
    expertise: '',
    learningStyle: '',
    includeExamples: true,
    detailLevel: 'medium'
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setSettings(prev => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    // Save settings to localStorage or backend
    localStorage.setItem('userSettings', JSON.stringify(settings));
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ 
        backgroundColor: '#2e7d32', 
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <SettingsIcon />
        User Settings
      </DialogTitle>
      
      <DialogContent sx={{ mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Personal Information
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
          <TextField
            label="Name"
            name="name"
            value={settings.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={settings.age}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Expertise Level"
            name="expertise"
            select
            value={settings.expertise}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </TextField>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1" gutterBottom>
          Learning Preferences
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Learning Style"
            name="learningStyle"
            select
            value={settings.learningStyle}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="visual">Visual</option>
            <option value="auditory">Auditory</option>
            <option value="reading">Reading/Writing</option>
            <option value="kinesthetic">Kinesthetic</option>
          </TextField>
          
          <FormControlLabel
            control={
              <Switch
                checked={settings.includeExamples}
                onChange={handleChange}
                name="includeExamples"
              />
            }
            label="Include practical examples"
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          onClick={handleSave}
          variant="contained"
          sx={{ 
            backgroundColor: '#2e7d32',
            '&:hover': { backgroundColor: '#1b5e20' }
          }}
        >
          Save Settings
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings; 