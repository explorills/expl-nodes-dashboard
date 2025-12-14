/**
 * PoweredByExplNodes - Tagline component for ONE Network
 * 
 * Displays the "// Powered by EXPL Nodes" badge with consistent styling,
 * 3D effects, and animations. Adapted for Material-UI.
 * 
 * @version 1.0.0
 * @author EXPL / ONE Ecosystem
 */

import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface PoweredByExplNodesProps {
  /** Size variant: 'sm' (10px), 'md' (12px), 'lg' (14px) */
  size?: 'sm' | 'md' | 'lg';
  /** Link URL (default: https://node.expl.one) */
  href?: string;
  /** Open in new tab (default: true) */
  newTab?: boolean;
}

const SIZES = {
  sm: {
    fontSize: '10px',
    paddingX: '8px',
    paddingY: '4px',
    borderRadius: '4px',
  },
  md: {
    fontSize: '12px',
    paddingX: '12px',
    paddingY: '6px',
    borderRadius: '6px',
  },
  lg: {
    fontSize: '14px',
    paddingX: '16px',
    paddingY: '8px',
    borderRadius: '8px',
  },
};

export default function PoweredByExplNodes({
  size = 'sm',
  href = 'https://node.expl.one',
  newTab = true,
}: PoweredByExplNodesProps) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeStyles = SIZES[size];
  const primaryColor = theme.palette.primary.main;

  return (
    <Box
      component="a"
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        fontFamily: "'Roboto Mono', ui-monospace, monospace",
        fontSize: sizeStyles.fontSize,
        fontWeight: 400,
        color: '#ffffff',
        textDecoration: 'none',
        padding: `${sizeStyles.paddingY} ${sizeStyles.paddingX}`,
        backgroundColor: isHovered ? 'rgba(24, 24, 27, 0.8)' : 'rgba(24, 24, 27, 0.95)',
        border: `1px solid ${primaryColor}`,
        borderRadius: sizeStyles.borderRadius,
        boxShadow: isHovered 
          ? `0 4px 8px rgba(0,0,0,0.4), 0 0 12px ${primaryColor}80, inset 0 1px 0 rgba(255,255,255,0.15)`
          : '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        transform: isHovered ? 'translateY(-1px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
      }}
    >
      // Powered by EXPL Nodes
    </Box>
  );
}
