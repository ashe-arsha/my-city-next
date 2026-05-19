import React, { useState } from "react";
import styles from "@/styles/deceasedSearch.module.css";
import SanandajSidebar from "@/components/layout/SanandajSidebar";

interface Deceased {
  id: number;
  name: string;
  family: string;
  father: string;
  death: string;
  section: string;
  row: string;
  cemetery: string;
  gender: "مرد" | "زن";
}

export default function DeceasedSearchPage() {
  const [form, setForm] = useState({
    name: "",
    family: "",
    fatherName: "",
    deathYear: "",
    section: "",
    row: "",
  });

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Deceased[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const mockData: Deceased[] = [
    { id: 1, name: "احمد", family: "کریمی", father: "علی", death: "1400", section: "12", row: "5", cemetery: "بهشت محمدی", gender: "مرد" },
    { id: 2, name: "فاطمه", family: "محمدی", father: "حسن", death: "1398", section: "3", row: "21", cemetery: "آرامستان بهاران", gender: "زن" },
    { id: 3, name: "رضا", family: "مرادی", father: "کاظم", death: "1395", section: "8", row: "12", cemetery: "بهشت محمدی", gender: "مرد" },
    { id: 4, name: "زهرا", family: "احمدی", father: "حسین", death: "1401", section: "15", row: "2", cemetery: "بهاران", gender: "زن" },
    { id: 5, name: "مهدی", family: "صادقی", father: "عباس", death: "1399", section: "6", row: "9", cemetery: "بهشت محمدی", gender: "مرد" },
    { id: 6, name: "لیلا", family: "نوری", father: "مجید", death: "1397", section: "10", row: "4", cemetery: "بهاران", gender: "زن" },
    { id: 7, name: "حسن", family: "کاظمی", father: "رضا", death: "1402", section: "1", row: "30", cemetery: "بهشت محمدی", gender: "مرد" },
  ];

  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      const filtered = mockData.filter((item) => {
        return (
          (form.name === "" || item.name.includes(form.name)) &&
          (form.family === "" || item.family.includes(form.family)) &&
          (form.fatherName === "" || item.father.includes(form.fatherName)) &&
          (form.deathYear === "" || item.death.includes(form.deathYear)) &&
          (form.section === "" || item.section.includes(form.section)) &&
          (form.row === "" || item.row.includes(form.row))
        );
      });

      setResults(filtered);
      setLoading(false);
      setCurrentPage(1);
    }, 500);
  };

  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.layout}>

      <SanandajSidebar />

      <main className={styles.page}>

        <div className={styles.header}>
          <h1>جستجوی متوفی</h1>
        </div>

        <div className={styles.searchBox}>
          <div className={styles.inputs}>
            <input name="name" placeholder="نام" onChange={handleChange} />
            <input name="family" placeholder="نام خانوادگی" onChange={handleChange} />
            <input name="fatherName" placeholder="نام پدر" onChange={handleChange} />
            <input name="deathYear" placeholder="سال فوت" onChange={handleChange} />
            <input name="section" placeholder="قطعه" onChange={handleChange} />
            <input name="row" placeholder="ردیف" onChange={handleChange} />
          </div>

          <button className={styles.searchBtn} onClick={handleSearch}>
            جستجو
          </button>
        </div>

        <div className={styles.resultsArea}>
          {loading ? (
            <div className={styles.loader}>در حال جستجو...</div>
          ) : results.length > 0 ? (
            paginatedResults.map((item) => (
              <div className={styles.resultCard} key={item.id}>
                <div>
                  <h3>{item.name} {item.family}</h3>
                  <p>جنسیت: {item.gender}</p>
                  <p>نام پدر: {item.father}</p>
                  <p>سال فوت: {item.death}</p>
                  <p>قطعه: {item.section} - ردیف: {item.row}</p>
                  <p>آرامستان: {item.cemetery}</p>
                </div>

                <button className={styles.locBtn}>
                  محل
                </button>
              </div>
            ))
          ) : (
            <div className={styles.noResult}>نتیجه‌ای یافت نشد</div>
          )}
        </div>

        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              قبلی
            </button>
          )}

          {results.length > currentPage * itemsPerPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              بعدی
            </button>
          )}
        </div>

      </main>
    </div>
  );
}
