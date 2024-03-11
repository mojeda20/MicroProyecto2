import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const useClubes = (search = "") => {
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    const fetchClubes = async () => {
      // Crear una consulta base que obtenga todos los documentos de la colección 'clubes'
      let q = query(collection(db, "clubes"));

      // Si hay un criterio de búsqueda, ajustar la consulta para filtrar por nombre
      if (search) {
        q = query(
          q,
          where("nombre", ">=", search),
          where("nombre", "<=", search + "\uf8ff")
        );
      }

      const querySnapshot = await getDocs(q);
      setClubes(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchClubes();
  }, [search]);

  return clubes;
};

export default useClubes;