import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  CircularProgress, 
  Alert,
  Card,
  CardContent,
  IconButton,
  Stack
} from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import axios from 'axios';

const Recommendations = ({ topic, subtopic }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSubtopic, setCurrentSubtopic] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  React.useEffect(() => {
    if (subtopic && subtopic !== currentSubtopic) {
      setLoading(true);
      setError(null);
      setCurrentCardIndex(0);
      
      axios.post('http://localhost:5000/api/get-recommendations', {
        topic,
        subtopic
      })
      .then(response => {
        setRecommendations(response.data.learningPoints);
        setCurrentSubtopic(subtopic);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(
          err.response?.data?.details || 
          err.response?.data?.error || 
          'Failed to fetch recommendations'
        );
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, [subtopic]);

  const handleNext = () => {
    setCurrentCardIndex((prev) => 
      prev < recommendations.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => 
      prev > 0 ? prev - 1 : prev
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 3 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
      {recommendations.length > 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card 
            sx={{ 
              width: '100%',
              maxWidth: 800,
              minHeight: 200,
              backgroundColor: '#f8f9fa',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              borderRadius: '12px'
            }}
          >
            <CardContent>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  color: '#2e7d32',
                  fontWeight: 600,
                  borderBottom: '2px solid #e8f5e9',
                  pb: 1
                }}
              >
                Key Learning Point {currentCardIndex + 1}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  pl: 2,
                  borderLeft: '4px solid #2e7d32',
                  py: 1
                }}
              >
                {recommendations[currentCardIndex]}
              </Typography>
            </CardContent>
          </Card>
          
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ mt: 3 }}
            alignItems="center"
          >
            <IconButton 
              onClick={handlePrevious}
              disabled={currentCardIndex === 0}
              sx={{ 
                backgroundColor: '#e8f5e9',
                '&:hover': { backgroundColor: '#c8e6c9' },
                '&.Mui-disabled': { backgroundColor: '#f5f5f5' }
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {currentCardIndex + 1} of {recommendations.length}
            </Typography>
            <IconButton 
              onClick={handleNext}
              disabled={currentCardIndex === recommendations.length - 1}
              sx={{ 
                backgroundColor: '#e8f5e9',
                '&:hover': { backgroundColor: '#c8e6c9' },
                '&.Mui-disabled': { backgroundColor: '#f5f5f5' }
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Box>
      ) : (
        <Typography color="text.secondary">
          Select a topic and subtopic to see recommendations
        </Typography>
      )}
    </Box>
  );
};

export default Recommendations; 