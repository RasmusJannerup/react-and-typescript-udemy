import { useTimersContext } from '../store/timers-context.tsx';
import Button from './UI/Button.tsx';

export default function Header() {

  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button
        onClick={() => {
          if (timersCtx.isRunning) {
            timersCtx.stopTimers();
          } else {
            timersCtx.startTimers();
          }
        }}
      >
        {
          timersCtx.isRunning ? 'Stop' : 'Start'
        }
      </Button>
    </header>
  );
}
