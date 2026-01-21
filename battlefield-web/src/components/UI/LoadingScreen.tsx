export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 mb-4"></div>
        <p className="text-white text-xl font-bold tracking-wider">
          CARREGANDO ARQUIVOS...
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Preparando menu cinematográfico
        </p>
      </div>
    </div>
  );
}
