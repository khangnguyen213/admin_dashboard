import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd';
import Header from './header';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => (
        <ThemedTitleV2 {...titleProps} text="REFINE ADMIN" />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
}

export default Layout;
