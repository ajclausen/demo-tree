import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import TreeRemoval from './pages/services/TreeRemoval';
import TreeTrimming from './pages/services/TreeTrimming';
import TreeCare from './pages/services/TreeCare';
import ResidentialServices from './pages/services/ResidentialServices';
import CommercialServices from './pages/services/CommercialServices';
import StumpRemoval from './pages/services/StumpRemoval';
import StormDamage from './pages/services/StormDamage';
import Career from './pages/Career';
import Blog from './pages/Blog';
import HardwoodTrees from './pages/blog/HardwoodTrees';
import TreePlanting from './pages/blog/TreePlanting';
import DeadTreeRemoval from './pages/blog/DeadTreeRemoval';
import TreePestProtection from './pages/blog/TreePestProtection';
import WinterTreePruning from './pages/blog/WinterTreePruning';
import TreeBenefits from './pages/blog/TreeBenefits';
import EmeraldAshBorer from './pages/blog/EmeraldAshBorer';
import TreeFungalDiseases from './pages/blog/TreeFungalDiseases';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/tree-removal" element={<TreeRemoval />} />
            <Route path="/services/tree-trimming" element={<TreeTrimming />} />
            <Route path="/services/tree-care" element={<TreeCare />} />
            <Route path="/services/residential" element={<ResidentialServices />} />
            <Route path="/services/commercial" element={<CommercialServices />} />
            <Route path="/services/stump-removal" element={<StumpRemoval />} />
            <Route path="/services/storm-damage" element={<StormDamage />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/hardwood-trees" element={<HardwoodTrees />} />
            <Route path="/blog/diy-tree-planting" element={<TreePlanting />} />
            <Route path="/blog/dead-tree-removal" element={<DeadTreeRemoval />} />
            <Route path="/blog/tree-pest-protection" element={<TreePestProtection />} />
            <Route path="/blog/winter-tree-pruning" element={<WinterTreePruning />} />
            <Route path="/blog/tree-benefits" element={<TreeBenefits />} />
            <Route path="/blog/emerald-ash-borer" element={<EmeraldAshBorer />} />
            <Route path="/blog/tree-fungal-diseases" element={<TreeFungalDiseases />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;