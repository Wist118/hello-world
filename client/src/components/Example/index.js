import React from 'react';
import NavLg from '../components/NavLg';
import NavSm from '../components/NavSm';
import FooterMenu from '../components/FooterExpand';

const Example = () => {
  return (
  <div className="flex flex-col h-screen justify-start text-lg">
  {/* navigation header start */}
  <header>
    <NavLg></NavLg>
    <NavSm></NavSm>
  </header>
  {/* navigation header end */}
  <div className='w-screen px-5 my-5 md:pt-0 md:pr-9 font-bold text-2xl lg:text-3xl xl:text-4xl md:text-right'>
    Submit a Project
  </div>

  {/* body start */}
  <main class="sm:grid sm:grid-cols-2 md:grid-cols-3 mb-10">

    {/*md break column 1 */}
    <div className="grid content-center px-5">
      <h2 className='font-semibold mb-2 text-xl'>Column 1 Header</h2>
    </div>

    {/*md break column 2 */}
    <div className="grid content-center px-5">
      <h2 className='font-semibold mb-2 text-xl'>Column 2 Header</h2>
    </div>

    {/*md break column 3 */}
    <div className="grid content-center px-5">
      <h2 className='font-semibold mb-2 text-xl'>Column 3 Header</h2>
    </div>

  </main>
  {/* body end */}


  {/* footer start */}
  <footer className="fixed bottom-0 display-contents">
  <FooterMenu></FooterMenu>
  </footer>
  {/* footer end */}
  </div>
);
}
export default Example;