import './App.css';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Card,
  CardContent,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Stack,
  Chip
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import HistoryIcon from '@mui/icons-material/History';
import ComputerIcon from '@mui/icons-material/Computer';
import TheatersIcon from '@mui/icons-material/Theaters';
import LifestyleIcon from '@mui/icons-material/Style';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { useState } from 'react';

const drawerWidth = 200;

const navItems = [
  { text: 'Personal Development', icon: <PersonOutlineIcon />, href: '#personal-development' },
  { text: 'Health & Wellness', icon: <FavoriteIcon />, href: '#health' },
  { text: 'Finance', icon: <AttachMoneyIcon />, href: '#finance' },
  { text: 'Relationships', icon: <PeopleIcon />, href: '#relationships' },
  { text: 'Business', icon: <BusinessIcon />, href: '#business' },
  { text: 'Learning', icon: <SchoolIcon />, href: '#learning' },
  { text: 'History', icon: <HistoryIcon />, href: '#history' },
  { text: 'Technology', icon: <ComputerIcon />, href: '#technology' },
  { text: 'Entertainment', icon: <TheatersIcon />, href: '#entertainment' },
  { text: 'Lifestyle', icon: <LifestyleIcon />, href: '#lifestyle' }
];

const topicChips = {
  'personal-development': [
    'Personal development', 'Productivity', 'Mindfulness', 
    'Time Management', 'Habits', 'Motivation'
  ],
  'health': [
    'Health', 'Fitness', 'Mental Health', 'Meditation', 'Longevity'
  ],
  'finance': [
    'Money & Investments', 'Economics'
  ],
  'relationships': [
    'Love & Relationships', 'Psychology'
  ],
  'business': [
    'Career', 'Startups', 'Leadership & Management', 'Business',
    'Entrepreneurship', 'Corporate', 'Remote Work', 'Strategy',
    'Human Resources'
  ],
  'learning': [
    'Education', 'Communication', 'Problem solving', 'Writing',
    'Science & Nature', 'Computer Science', 'Artificial Intelligence',
    'Software Intelligence'
  ],
  'history': [
    'Philosophy', 'History', 'Arts & Culture'
  ],
  'technology': [
    'The future', 'Crypto', 'Cybersecurity', 'Space'
  ],
  'entertainment': [
    'Entertainment', 'Movies', 'Videos', 'Podcasts', 'Anime', 'Pop Culture'
  ],
  'lifestyle': [
    'Food', 'Travel', 'Sports', 'Fashion', 'Religion', 'Parenting',
    'Books', 'Science Fiction', 'Politics'
  ]
};

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (href) => {
    const topic = href.replace('#', '');
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#2e7d32'
        }}
      >
        <Toolbar>
          <Stack 
            direction="row" 
            spacing={1} 
            alignItems="center" 
            sx={{ flexGrow: 1 }}
          >
            <LocalFloristIcon 
              sx={{ 
                fontSize: 28,
                animation: 'bloom 2s ease-in-out infinite',
                '@keyframes bloom': {
                  '0%, 100%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                  },
                }
              }} 
            />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              Growth Sage
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f0f2f5',
            borderRight: 'none'
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              pl: 1,
              mb: 0,
              color: '#1c1e21',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.5px',
              pb: 0
            }}
          >
            Select Topic
          </Typography>
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  href={item.href}
                  onClick={() => handleTopicClick(item.href)}
                  selected={selectedTopic === item.href.replace('#', '')}
                  sx={{
                    borderRadius: '0',
                    m: 0,
                    p: 1,
                    '&:hover': {
                      backgroundColor: '#e4e6eb',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#e7f3ff',
                      '&:hover': {
                        backgroundColor: '#e7f3ff',
                      }
                    }
                  }}
                >
                  <ListItemIcon sx={{ 
                    minWidth: 35,
                    color: '#2e7d32'
                  }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: { 
                        fontWeight: 500,
                        color: '#050505',
                        fontSize: '0.9rem'
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${0}px`,
          backgroundColor: '#f0f2f5',
          minHeight: '100vh',
          pt: 8,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <Box
          sx={{
            width: '95%',
            maxWidth: 1200,
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            mt: 2,
            p: 3,
            minHeight: '80vh'
          }}
        >
          {selectedTopic && (
            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              gap={1}
              sx={{ 
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {topicChips[selectedTopic]?.map((chip) => (
                <Chip
                  key={chip}
                  label={chip}
                  sx={{
                    backgroundColor: '#f0f2f5',
                    '&:hover': {
                      backgroundColor: '#e4e6eb',
                    },
                    fontWeight: 500,
                    fontSize: '1rem',
                    height: '40px',
                    borderRadius: '20px',
                    '& .MuiChip-label': {
                      padding: '0 16px'
                    }
                  }}
                  clickable
                />
              ))}
            </Stack>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default App; 