import { Skeleton, Box } from '@mui/material';

export const LoadingSkeleton = () => (
  <Box sx={{ 
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    display: 'flex',
    position: 'relative',
  }}>
    {/* Sidebar Skeleton */}
    <Box sx={{
      width: 288, // matches w-72 (72 * 4 = 288)
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, #1f2937, #111827)',
      display: { xs: 'none', lg: 'block' },
    }}>
      {/* Sidebar Header */}
      <Box sx={{ 
        height: 80,
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        borderBottom: '1px solid #374151',
      }}>
        <Skeleton 
          variant="text" 
          width="60%" 
          height={32}
          sx={{ bgcolor: 'rgba(96, 165, 250, 0.3)' }}
        />
      </Box>

      {/* Navigation Items */}
      <Box sx={{ padding: '24px 16px', gap: '8px', display: 'flex', flexDirection: 'column' }}>
        {[1, 2, 3, 4].map((item) => (
          <Skeleton
            key={item}
            variant="rounded"
            width="100%"
            height={48}
            sx={{ bgcolor: '#1f2937' }}
          />
        ))}
      </Box>

      {/* Sidebar Footer */}
      <Box sx={{ 
        padding: '16px',
        borderTop: '1px solid #374151',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Skeleton variant="circular" width={36} height={36} sx={{ bgcolor: '#1f2937' }} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" height={20} sx={{ bgcolor: '#1f2937' }} />
            <Skeleton variant="text" width="40%" height={16} sx={{ bgcolor: '#1f2937' }} />
          </Box>
        </Box>
      </Box>
    </Box>

    {/* Main Content Area */}
    <Box sx={{ 
      flex: 1,
      marginLeft: { lg: '288px' },
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Mobile Header */}
      <Box sx={{
        display: { lg: 'none' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        padding: '16px',
        boxShadow: 1,
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Skeleton variant="rounded" width={40} height={40} />
          <Skeleton variant="text" width="30%" height={32} />
          <Box width={40} /> {/* Spacer */}
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: '24px' }}>
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: 3,
          padding: '24px',
          border: '1px solid #f1f5f9',
        }}>
          {/* Content Title */}
          <Skeleton variant="rounded" width="30%" height={40} sx={{ mb: 3 }} />
          
          {/* Chart Area */}
          <Skeleton 
            variant="rounded" 
            width="100%" 
            height={300} 
            sx={{ mb: 3, borderRadius: '12px' }} 
          />
          
          {/* Stats Cards */}
          <Box sx={{ display: 'flex', gap: '16px' }}>
            {[1, 2].map((item) => (
              <Skeleton
                key={item}
                variant="rounded"
                width="50%"
                height={100}
                sx={{ borderRadius: '12px' }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);