const Credits = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-solid border-gray-600">
      <a href="https://www.linkedin.com/in/carlos-diazbarriga/">
        <img src="/linkedin.svg" alt="LinkedIn" />
      </a>
      <div className="mt-4 text-center ">
        <p className="text-sm">Creado por:</p>
        <p className="text-lg text-cyan-500 font-sans">Carlos Diaz</p>
        <p className="text-sm">Web developer and Experience creator</p>
      </div>
      <a href="https://github.com/Soyelchamps/">
        <img src="/github.svg" alt="Github" />
      </a>
    </div>
  );
};

export { Credits };
