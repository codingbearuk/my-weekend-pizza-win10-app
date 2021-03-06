import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import colors from 'constants/colors';
import electron from 'electron';
import { TitleBar } from 'react-desktop/windows';
import { initializeIcons } from '@fluentui/react/lib/Icons';

import Sidebar from '../components/Sidebar';

const Layout = styled.div<{ isMaximized: boolean; isOpen: boolean }>`
  display: grid;
  transition-duration: 0.3s;
  grid-template-columns: ${({ isOpen, isMaximized }) =>
    isOpen ? '30% 70%' : isMaximized ? '4.5% 95.5%' : '6% 94%'};
  border-radius: ${(p) => (p.isMaximized ? '0px' : '3px')};
  overflow: hidden;
  position: relative;

  section {
    background: ${colors.white};
    padding: 0 20px;
  }
`;

const WindowControls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  div {
    position: absolute;
    right: 0;
  }
`;

const BasicLayout: React.FunctionComponent = (p) => {
  const [isMaximized, setMaximized] = useState<boolean>(false);
  const isMenuOpen = useSelector((s: any) => s.sidebar.isOpen);
  const Bwindow = electron.remote.BrowserWindow.getAllWindows()[0];
  initializeIcons();

  const handleMaximize = (): void => {
    if (isMaximized) {
      Bwindow?.restore();
      setMaximized(false);
    } else {
      Bwindow?.maximize();
      setMaximized(true);
    }
  };

  return (
    <Layout id="main-window" isMaximized={isMaximized} isOpen={isMenuOpen}>
      <Sidebar isMaximized={isMaximized} />
      <section>{p.children}</section>
      <WindowControls>
        <TitleBar
          controls
          background="none"
          isMaximized={isMaximized}
          onCloseClick={() => Bwindow?.close()}
          onMinimizeClick={() => Bwindow?.minimize()}
          onMaximizeClick={handleMaximize}
          onRestoreDownClick={handleMaximize}
        />
      </WindowControls>
    </Layout>
  );
};

export default BasicLayout;
