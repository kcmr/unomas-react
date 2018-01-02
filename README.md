# unomas-react

Know your enemy :P

## Specs

- Home
  - Login
  - Gráfico horas datos random
- Today (date)
  - Cuenta total hoy
  - Botón +1 (¿posibilidad de deshacer o restar? -> NO: sale modal de intensidad del mono. Posibilidad cancelar y no sumar aquí.)
  - pager (día anterior / día siguiente oculto)
  - Gráfico horas hoy
- Date (fecha)
  - Cuenta día
  - pager (día anterior / día siguiente)
  - Gráfico horas día
- Gráfico
  - 24 horas / barras
  - Cada hora admite un máximo de 15 entradas (60 min hora / 4 min por cigarro)
  - Una barra muestra
      - el total de entradas en gris oscuro (cigarros en esa hora)
      - la intensidad de esos cigarros en rojo por encima del gris (puede ser "apetecía" o "no apetecía")
- Counter
  - Dos dígitos (leading zero)
  - Animación tipo reloj HTC al sumar
- Botón +1
  - Al clicar aparece modal para seleccionar intensidad (apetecía o no)
  - Si se cancela modal no se suma
- Datos
  - dates (objeto)
    - día en formato YYYY-MM-DD (objeto)
      - índice hora (¿array? - Firebase)
        - intensity (0/1)

Ejemplo: 

```js
dates: {
  "2018-01-02": {
    "0": [
      { intensity: 0 }, 
      { intensity: 1 }, 
      { intensity: 0 }
    ],
    "9": [
      { intensity: 1 }, 
      { intensity: 1 }
    ]
  },
  "2017-12-31": {
    ...
  }  
}
```      



