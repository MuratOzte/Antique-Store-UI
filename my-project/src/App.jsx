import './App.css';
import Nav from './Components/nav/Nav';

function App() {
    return (
        <div
            style={{
                scrollSnapType: 'y mandatory',
                width: '100%',
                height: '100vh',
                overflowY: 'scroll',
            }}
        >
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <Nav />
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <h1>Hello, World!</h1>
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <h1>Hello, World!</h1>
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <h1>Hello, World!</h1>
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <h1>Hello, World!</h1>
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                    width: '100%',
                }}
            >
                <h1>Hello, World!</h1>
            </div>
            <div
                style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    height: '100vh',
                }}
            >
                <h1>Hello, World!</h1>
            </div>
        </div>
    );
}

export default App;
