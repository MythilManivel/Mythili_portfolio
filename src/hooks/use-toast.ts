import * as React from "react";

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type Toast = ToasterToast & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const TOAST_ACTION_TYPES = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ActionType = typeof TOAST_ACTION_TYPES;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: Toast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<Toast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: string;
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: string;
    };

interface State {
  toasts: Toast[];
}

const toastState: State = {
  toasts: [],
};

export const dispatch = (action: Action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return toastState.toasts.push(action.toast);

    case "UPDATE_TOAST":
      return toastState.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t));

    case "DISMISS_TOAST": {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        toastState.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }
      break;
    }

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return (toastState.toasts = []);
      }
      return (toastState.toasts = toastState.toasts.filter((t) => t.id !== action.toastId));
  }
};

function useToast() {
  const [state, setState] = React.useState<State>(toastState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

function toast(props: ToasterToast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id, open: true, onOpenChange: (open) => !open && dismiss() },
    });

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => !open && dismiss(),
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

const listeners: Array<(state: State) => void> = [];

const actionsToDispatch: Action[] = [];

const dispatch_debounced = (action: Action) => {
  actionsToDispatch.push(action);

  setTimeout(() => {
    dispatch(actionsToDispatch.pop()!);

    listeners.forEach((listener) => {
      listener(toastState);
    });
  }, 1);
};

export { useToast, toast };
