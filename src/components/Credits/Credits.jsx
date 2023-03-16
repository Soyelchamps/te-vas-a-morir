const Credits = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b border-solid border-gray-600">
      <a href="https://www.linkedin.com/in/carlos-diazbarriga/">
        <img src="/linkedin.svg" alt="LinkedIn" />
      </a>
      <div className="mt-4 text-center ">
        <h5>Carlos Diaz</h5>
        <h6>Web developer and Experience creator</h6>
      </div>
      {/* <a href="https://github.com/Soyelchamps/">
        <video autoplay loop muted>
          <source src="/github-gif.gif" type="video/gif" />
        </video>
      </a> */}

      <a href="https://github.com/Soyelchamps/">
        <img src="/github.svg" alt="Github" />
      </a>
    </div>
  );
};

export { Credits };
