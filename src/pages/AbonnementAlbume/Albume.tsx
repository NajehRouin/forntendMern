import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAlbum, fetchAlbumById } from "../../stores/AlbumActions";
import { RootState, AppDispatch } from "../../stores/store";
import clsx from "clsx";
import Lucide from "../../base-components/Lucide";
import Table from "../../base-components/Table";
import { FormSwitch } from "../../base-components/Form";
const InitailState = {
  titre: "",
  NombreAlbume: "",
  prix: {
    $numberDecimal: "",
  },
  periode: "",
  etat: "",
};
function Albume() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { Albums, Album, loading, error, success } = useSelector(
    (state: RootState) => state.album
  );
  const [album, setAlbum] = useState(InitailState);
  useEffect(() => {
    dispatch(fetchAlbum());
  }, [dispatch]);

  const getALbumonByid = async (id: any) => {
    try {
      const album = dispatch(fetchAlbumById(id));
      album.then((res: any) => {
        setOpen(true);
        setAlbum(res?.payload);
      });
    } catch (error) {}
  };
  const handleClose = () => {
    setOpen(false);
    setAlbum(InitailState);
  };

  return (
    <div className="flex flex-col gap-24">
      <div
        id="modal"
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
          open ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg shadow-md p-4 max-w-md w-full relative overflow-y-auto max-h-[60vh]">
          <div className="text-xl text-center mb-4">
            Details Album {album?.titre}
          </div>

          <div className="p-2 border border-gray-300 rounded-md">
            <div className="flex items-center border-b border-gray-300 pb-1 mb-1">
              <div className="w-4 h-4 mr-2 transform rotate-0">▼</div>
              <div>Information sur {album?.titre}</div>
            </div>

            {/* div titre */}
            <div className="flex flex-row items-center mb-1">
              <label htmlFor="titre" className="w-40 font-bold">
                Titre :
              </label>
              <input
                id="titre"
                name="titre"
                type="text"
                disabled
                placeholder="titre album"
                defaultValue={album?.titre}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* div NombreAlbume */}
            <div className="flex flex-row items-center mb-1">
              <label htmlFor="NombreAlbume" className="w-40 font-bold">
                Nombre Albume :
              </label>
              <input
                id="NombreAlbume"
                name="NombreAlbume"
                type="text"
                disabled
                placeholder="Nombre Albume"
                defaultValue={album?.NombreAlbume}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* div Periode */}
            <div className="flex flex-row items-center mb-1">
              <label htmlFor="periode" className="w-40 font-bold">
                Periode Albume :
              </label>
              <input
                id="periode"
                name="periode"
                type="text"
                disabled
                placeholder="Periode Albume "
                defaultValue={album?.periode}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* div prix */}
            <div className="flex flex-row items-center mb-1">
              <label htmlFor="prix" className="w-40 font-bold">
                Prix Albume :
              </label>
              <input
                id="prix"
                name="prix"
                type="text"
                disabled
                placeholder="numero Tel artison"
                defaultValue={album?.prix?.$numberDecimal}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* div etat */}
            <div className="flex flex-row items-center mb-1">
              <label htmlFor="etat" className="w-40 font-bold">
                Etat Albume :
              </label>
              <input
                id="etat"
                name="etat"
                type="text"
                disabled
                placeholder="numero Tel artison"
                defaultValue={album?.etat}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 border-none rounded-md bg-gray-600 text-white cursor-pointer mr-2"
                onClick={handleClose}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </div>

      <div  className=" overflow-x-auto ">
        <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
          <Table.Thead className="th">
            <Table.Tr>
              <Table.Th className=" c text-center border-b-2 whitespace-nowrap">
                N°
              </Table.Th>
              <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                Titre Albume
              </Table.Th>
              <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                Nombre Albume
              </Table.Th>
              <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                Prix d'Albume
              </Table.Th>
              <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                Periode Albume
              </Table.Th>

              <Table.Th className="c text-center border-b-2 whitespace-nowrap">
                Etat Albume
              </Table.Th>
              <Table.Th className=" c text-center border-b-2 whitespace-nowrap">
                Actions
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Albums?.map((albume: any, key: any) => (
              <Table.Tr key={key} className="intro-x">
                <Table.Td
                  data-label="Id"
                  className="c text-center first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                >
                  <a href="" className=" font-medium whitespace-nowrap">
                    {key + 1}
                  </a>
                </Table.Td>
                <Table.Td
                  data-label="Nom"
                  className="c first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                >
                  {albume?.titre}
                </Table.Td>
                <Table.Td
                  data-label="prenom"
                  className="c first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                >
                  {albume?.NombreAlbume}
                </Table.Td>

                <Table.Td
                  data-label="prenom"
                  className="c first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                >
                  {albume?.prix?.$numberDecimal}
                </Table.Td>
                <Table.Td
                  data-label="Nom"
                  className="c first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                >
                  {albume?.periode}
                </Table.Td>

                <Table.Td
                  data-label="Bloque"
                  className="c first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]"
                >
                  <div
                    className={clsx([
                      "flex items-center justify-center",
                      { "text-success": albume?.etat === true },
                      { "text-danger": albume?.etat === false },
                    ])}
                  >
                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                    {albume?.etat === true ? "Activé" : "Désactivé"}
                  </div>
                </Table.Td>

                <Table.Td className="c first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                  <div className="flex items-center justify-center">
                    <p
                      className="flex items-center text-info mr-3 cursor-pointer"
                      onClick={() => {
                        // getEmployeById(admin?._id);
                        // setOpen(true);
                        // SetViewDetail(false);
                      }}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-1 " />
                      Modifier
                    </p>
                    <p
                      className="flex items-center text-info mr-3 cursor-pointer"
                      onClick={() => {
                        getALbumonByid(albume?._id);

                        // SetViewDetail(true);
                        // setOpen(true);
                      }}
                    >
                      <Lucide icon="Eye" className="w-6 h-6 ml-2 " />
                    </p>
                    <div
                      id="etat-categorie"
                      className="flex items-center text-danger"
                    >
                      <FormSwitch className="flex  sm:justify-center">
                        <FormSwitch.Input
                          // onClick={toggle}
                          name="etat"
                          checked={albume?.etat}
                          onChange={(e: any) => {
                            // handleChange(e, admin?._id);
                          }}
                          className="ml-3 mr-0 "
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                  </div>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

export default Albume;
