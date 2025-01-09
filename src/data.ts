import { Project, Skill } from './types';
import { Brain, Cpu, Code, GitBranch, Box, Eye, Flame } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Autonomous Robot',
    description: 'Developed an autonomous robot using ROS and deep learning for navigation',
    longDescription: 'Built a fully autonomous robot using ROS (Robot Operating System) and deep learning algorithms. Implemented SLAM for mapping, computer vision for object detection, and reinforcement learning for path planning. Achieved 95% accuracy in obstacle avoidance.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    tags: ['Python', 'ROS', 'TensorFlow', 'Computer Vision'],
    link: 'https://github.com'
  },
  {
    id: 2,
    title: 'Advanced Time Series Forecasting',
    description: 'Implemented deep learning models for financial market prediction',
    longDescription: 'Created a sophisticated time series forecasting system using LSTM and Transformer models. Processed real-time market data and achieved 87% accuracy in predicting market trends. Implemented automated trading strategies based on model predictions.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    tags: ['Python', 'PyTorch', 'Time Series', 'Deep Learning']
  },
  {
    id: 3,
    title: 'Smart Healthcare Monitoring',
    description: 'Developed an IoT-based health monitoring system with ML diagnostics',
    longDescription: 'Built an end-to-end IoT healthcare monitoring system using Arduino and Raspberry Pi. Implemented real-time vital sign monitoring with ML-based anomaly detection. Developed a web dashboard for remote monitoring and alerts.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    tags: ['IoT', 'Machine Learning', 'Arduino', 'Web Development']
  }
];

export const skills: Skill[] = [
  { name: 'TensorFlow', icon: Brain, category: 'AI/ML' },
  { name: 'PyTorch', icon: Flame, category: 'AI/ML' },
  { name: 'Computer Vision', icon: Eye, category: 'AI/ML' },
  { name: 'ROS', icon: Cpu, category: 'Robotics' },
  { name: 'Arduino', icon: Cpu, category: 'Robotics' },
  { name: 'Python', icon: Code, category: 'Programming' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'Docker', icon: Box, category: 'Tools' }
];