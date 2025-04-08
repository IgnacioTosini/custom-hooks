# Custom Hooks

Este proyecto contiene una colección de custom hooks reutilizables para React. A continuación, se describe cada uno de ellos:

## Hooks disponibles

### 1. `useCounter`
Un hook para manejar un contador con funciones para incrementar, decrementar y reiniciar.

**Archivo:** [`useCounter.js`](./useCounter/useCounter.js)

**Uso:**
```javascript
const { counter, increment, decrement, reset } = useCounter(initialValue);

Funciones:

increment(value = 1): Incrementa el contador por el valor especificado.
decrement(value = 1): Decrementa el contador por el valor especificado (no permite valores negativos).
reset(): Reinicia el contador al valor inicial.
2. useFetch
Un hook para realizar peticiones HTTP y manejar el estado de carga y errores.

Archivo: useFetch.js

Uso:

const { data, isLoading, hasError } = useFetch(url);
Estado devuelto:

data: Los datos obtenidos de la petición.
isLoading: Indica si la petición está en curso.
hasError: Indica si ocurrió un error.
3. useForm
Un hook para manejar formularios de manera sencilla.

Archivo: useForm.js

Uso:

const { formState, onInputChange, onResetForm } = useForm(initialForm);
Funciones:

onInputChange(event): Actualiza el estado del formulario al cambiar un campo.
onResetForm(): Reinicia el formulario a su estado inicial.
4. useTodo
Un hook para manejar una lista de tareas (todos) con funcionalidades para agregar, eliminar y alternar el estado de las tareas.

Archivo: useTodo.js

Uso:

const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodo();
Funciones:

handleNewTodo(todo): Agrega una nueva tarea.
handleDeleteTodo(id): Elimina una tarea por su ID.
onToggleTodo(id): Alterna el estado de completado de una tarea.
Estado devuelto:

todos: Lista de tareas.
todosCount: Número total de tareas.
pendingTodosCount: Número de tareas pendientes.
Cómo usar estos hooks
Importa el hook que necesites en tu componente.
Sigue los ejemplos de uso descritos arriba para integrarlo en tu lógica.