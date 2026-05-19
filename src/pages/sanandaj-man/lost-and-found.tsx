import React, { useState } from 'react';
import { 
  Search, Plus, MapPin, Calendar, ArrowLeft, 
  X, User, Phone, CreditCard, AlignLeft, CheckCircle2, AlertCircle,
  FileText, ChevronRight, ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from '../../styles/lost-and-found.module.css';
import SanandajSidebar from '../../components/layout/SanandajSidebar';

// تعریف تایپ برای اشیا
interface LostItem {
  id: number;
  title: string;
  fullName: string;
  phone: string;
  nationalId: string;
  date: string;
  location: string;
  address: string;
  description: string;
  type: 'lost' | 'found';
}

const INITIAL_DATA: LostItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? 'دسته کلید طرح چرم' : 'کیف پول قهوه‌ای',
  fullName: 'کاربر تستی',
  phone: '09181234567',
  nationalId: '3720000000',
  date: '1402/02/20',
  location: 'منطقه ۶ سنندج',
  address: 'خیابان ششم، پلاک ۱۰',
  description: 'یک عدد شیء با مشخصات ذکر شده پیدا شده است.',
  type: i % 3 === 0 ? 'found' : 'lost'
}));

const LostAndFound: React.FC = () => {
  // --- States ---
  const [items, setItems] = useState<LostItem[]>(INITIAL_DATA);
  const [activeTab, setActiveTab] = useState<'lost' | 'found'>('lost');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [reportType, setReportType] = useState<'lost' | 'found' | null>(null);
  
  // Detail Modal States
  const [selectedItem, setSelectedItem] = useState<LostItem | null>(null);

  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    nationalId: '',
    area: '',
    address: '',
    description: ''
  });
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const itemsPerPage = 6; // برای اینکه صفحه شلوغ نشه و پارتیشن‌بندی به چشم بیاد

  // --- Handlers ---
  const resetModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setReportType(null);
    setSelectedDate(null);
    setFormData({ fullName: '', phone: '', nationalId: '', area: '', address: '', description: '' });
  };

  const handleRegisterAd = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: LostItem = {
      id: Date.now(),
      title: formData.description.substring(0, 25) + "...", 
      fullName: formData.fullName,
      phone: formData.phone,
      nationalId: formData.nationalId,
      date: selectedDate?.format?.() || 'نامشخص',
      location: formData.area,
      address: formData.address,
      description: formData.description,
      type: reportType || 'lost'
    };

    setItems([newItem, ...items]);
    resetModal();
  };

  const filteredItems = items.filter(item => 
    item.type === activeTab && 
    (item.title.includes(searchQuery) || item.description.includes(searchQuery))
  );

  // منطق محاسباتی پارتیشن‌بندی
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.pageWrapper}>
      <SanandajSidebar />
      
      <main className={styles.contentArea}>
        <header className={styles.topBar}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              placeholder="جستجو در اشیا..." 
              className={styles.searchInput}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          
          <button className={styles.registerBtn} onClick={() => setIsModalOpen(true)}>
            <Plus size={20} />
            <span>ثبت آگهی جدید</span>
          </button>
        </header>

        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'lost' ? styles.activeTab : ''}`}
            onClick={() => { setActiveTab('lost'); setCurrentPage(1); }}
          >
            اشیا گمشده
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'found' ? styles.activeTab : ''}`}
            onClick={() => { setActiveTab('found'); setCurrentPage(1); }}
          >
            اشیا پیدا شده
          </button>
        </div>

        <section className={styles.grid}>
          {currentItems.map(item => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <div className={styles.cardDetails}>
                  <div className={styles.detailRow}>
                    <MapPin size={16} className={styles.detailIcon} />
                    <span>{item.location}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <Calendar size={16} className={styles.detailIcon} />
                    <span>{item.date}</span>
                  </div>
                </div>
                <button 
                    className={styles.detailsBtn}
                    onClick={() => setSelectedItem(item)}
                >
                  <span>مشاهده جزئیات</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
              <div className={styles.cardBadge}>
                {item.type === 'lost' ? <AlertCircle size={22} /> : <CheckCircle2 size={22} />}
              </div>
            </div>
          ))}
        </section>

        {/* --- بخش پارتیشن‌بندی --- */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className={styles.pageArrow}
            >
              <ChevronRight size={20} />
            </button>
            
            <div className={styles.pageNumbers}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.activePage : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
              className={styles.pageArrow}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        )}
      </main>

      {/* --- Modal ثبت آگهی --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:20}} className={styles.modalContent}>
              <div className={styles.modalHeader}>
                <h3>ثبت گزارش جدید</h3>
                <button onClick={resetModal} className={styles.closeBtn}><X size={20}/></button>
              </div>

              {step === 1 ? (
                <div className={styles.selectionStep}>
                   <div className={styles.selectionGrid}>
                    <div className={`${styles.selectionCard} ${styles.lostType}`} onClick={()=>{ setReportType('lost'); setStep(2); }}>
                      <AlertCircle size={40}/>
                      <span>چیزی گم کرده‌ام</span>
                    </div>
                    <div className={`${styles.selectionCard} ${styles.foundType}`} onClick={()=>{ setReportType('found'); setStep(2); }}>
                      <CheckCircle2 size={40}/>
                      <span>چیزی پیدا کرده‌ام</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form className={styles.reportForm} onSubmit={handleRegisterAd}>
                  <div className={styles.formGrid}>
                    <div className={styles.inputGroup}>
                      <label><User size={16}/> نام و نام خانوادگی</label>
                      <input required type="text" value={formData.fullName} onChange={(e)=>setFormData({...formData, fullName: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><Phone size={16}/> شماره تماس</label>
                      <input required type="tel" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><CreditCard size={16}/> کد ملی</label>
                      <input type="text" value={formData.nationalId} onChange={(e)=>setFormData({...formData, nationalId: e.target.value})} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label><Calendar size={16}/> تاریخ</label>
                      <DatePicker
                        calendar={persian}
                        locale={persian_fa}
                        value={selectedDate}
                        onChange={setSelectedDate}
                        className={styles.customDateInput}
                        containerStyle={{ width: "100%" }}
                      />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                        <label><MapPin size={16}/> محدوده</label>
                        <input type="text" value={formData.area} onChange={(e)=>setFormData({...formData, area: e.target.value})} />
                    </div>
                    <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                        <label><AlignLeft size={16}/> توضیحات و مشخصات</label>
                        <textarea rows={3} value={formData.description} onChange={(e)=>setFormData({...formData, description: e.target.value})}></textarea>
                    </div>
                  </div>
                  <div className={styles.formActions}>
                    <button type="button" className={styles.backBtn} onClick={()=>setStep(1)}>بازگشت</button>
                    <button type="submit" className={styles.submitBtn}>ثبت آگهی</button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Modal مشاهده جزئیات --- */}
      <AnimatePresence>
        {selectedItem && (
          <div className={styles.modalOverlay}>
            <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}} className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h3>جزئیات آگهی</h3>
                    <button onClick={() => setSelectedItem(null)} className={styles.closeBtn}><X size={20}/></button>
                </div>
                
                <div className={styles.detailContainer}>
                    <div className={styles.detailHeaderBadge}>
                        {selectedItem.type === 'lost' ? 
                            <span className={styles.lostBadge}><AlertCircle size={16}/> گمشده</span> : 
                            <span className={styles.foundBadge}><CheckCircle2 size={16}/> پیدا شده</span>
                        }
                    </div>
                    
                    <h2 className={styles.detailTitle}>{selectedItem.title}</h2>
                    
                    <div className={styles.detailInfoGrid}>
                        <div className={styles.infoBox}>
                            <User size={18} />
                            <div><label>ثبت کننده</label><p>{selectedItem.fullName}</p></div>
                        </div>
                        <div className={styles.infoBox}>
                            <Phone size={18} />
                            <div><label>شماره تماس</label><p dir="ltr">{selectedItem.phone}</p></div>
                        </div>
                        <div className={styles.infoBox}>
                            <Calendar size={18} />
                            <div><label>تاریخ ثبت</label><p>{selectedItem.date}</p></div>
                        </div>
                        <div className={styles.infoBox}>
                            <MapPin size={18} />
                            <div><label>محدوده</label><p>{selectedItem.location}</p></div>
                        </div>
                    </div>

                    <div className={styles.descriptionSection}>
                        <label><FileText size={18}/> توضیحات تکمیلی</label>
                        <p>{selectedItem.description || "توضیحاتی ثبت نشده است."}</p>
                    </div>

                    <div className={styles.detailActions}>
                        <button className={styles.callBtn} onClick={() => window.location.href = `tel:${selectedItem.phone}`}>
                            تماس با آگهی‌دهنده
                        </button>
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LostAndFound;
