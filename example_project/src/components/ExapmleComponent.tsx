import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';

type ButtonInfo = {
  text: string;
  height?: string;
};

const buttons: ButtonInfo[] = [
  { text: 'AAAA' },
  { text: 'BBBB' },
  { text: 'DDDD' },
  { text: 'CCCC' },
  { text: 'EEEE' },
  { text: 'FFFF' },
  { text: 'GGGG' },
  { text: 'HHHH' },
  { text: 'HHHH' },
  { text: 'HHHH' },
  { text: 'HHHH' },
];

const MobileTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const container = tabContainerRef.current;
    const selectedTab = tabListRef.current?.children[selectedIndex] as HTMLButtonElement;
    if (selectedTab && container) {
      const containerWidth = container.offsetWidth;
      const tabWidth = selectedTab.offsetWidth;
      const tabOffsetLeft = selectedTab.offsetLeft;
      const tabCenterOffset = tabOffsetLeft - containerWidth / 4 + tabWidth / 4;
      const scrollLeft = Math.max(0, tabCenterOffset - containerWidth / 5);
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [selectedIndex]);

  return (
    <Box sx={{ width: '390px', margin: '0 auto', ml: 1 }}>
      <Box
        ref={tabContainerRef}
        sx={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '10px', flexWrap: 'nowrap' }}
      >
        <Box ref={tabListRef} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant='contained'
              size='large'
              sx={{
                height: button.height || '40px',
                minWidth: '80px', // 버튼의 최소 가로 크기를 지정
                '&.active': {
                  backgroundColor: 'gray',
                },
              }}
              className={selectedIndex === index ? 'active' : ''}
              onClick={() => handleTabClick(index)}
            >
              {button.text}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileTab;
