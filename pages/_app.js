import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="w-75 m-auto">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
