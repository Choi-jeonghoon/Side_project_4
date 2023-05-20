import { SetStateAction, useEffect, useRef, useState } from 'react';

const MobileTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabListRef = useRef(null);
  const tabContainerRef = useRef(null);

  const handleTabClick = (index: SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const container = tabContainerRef.current;
    const selectedTab = tabListRef.current.children[selectedIndex];
    const containerWidth = container.offsetWidth;
    const tabWidth = selectedTab.offsetWidth;
    const tabOffsetLeft = selectedTab.offsetLeft;
    const tabCenterOffset = tabOffsetLeft - containerWidth / 4 + tabWidth / 4;
    const scrollLeft = Math.max(0, tabCenterOffset - containerWidth / 5);
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }, [selectedIndex]);

  return (
    <div style={{ width: '390px', margin: '0 auto' }}>
      <div ref={tabContainerRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <div ref={tabListRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            style={{ height: '150px' }}
            className={selectedIndex === 0 ? 'active' : ''}
            onClick={() => handleTabClick(0)}
          >
            AAAAAAAA
          </button>
          <button className={selectedIndex === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
            BBBBBBBB
          </button>
          <button className={selectedIndex === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
            DDDD
          </button>
          <button className={selectedIndex === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
            CCCCCCCC
          </button>
          <button className={selectedIndex === 4 ? 'active' : ''} onClick={() => handleTabClick(4)}>
            EEEEEEEE
          </button>
          <button className={selectedIndex === 5 ? 'active' : ''} onClick={() => handleTabClick(5)}>
            FFFFFFFFF
          </button>
          <button className={selectedIndex === 6 ? 'active' : ''} onClick={() => handleTabClick(6)}>
            GGGGGGGGG
          </button>
          <button className={selectedIndex === 7 ? 'active' : ''} onClick={() => handleTabClick(7)}>
            HHHHHHHHH
          </button>
          <button className={selectedIndex === 8 ? 'active' : ''} onClick={() => handleTabClick(8)}>
            HHHHHHHHH
          </button>
          <button className={selectedIndex === 9 ? 'active' : ''} onClick={() => handleTabClick(9)}>
            HHHHHHHHH
          </button>
          <button
            className={selectedIndex === 10 ? 'active' : ''}
            onClick={() => handleTabClick(10)}
          >
            HHHHHHHHH
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileTab;
