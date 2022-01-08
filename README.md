 We can access the collection of the **`<form>`** elements using 'elements' property by typing in the dev tools console:

```sql
console.dir(form)
```

![dev tools console](./Capture6.PNG)


Here we can access, for example,
📘 **Input**

```sql
<input type="text" id="product" name="qty">
```
  
using the following: 
```sql
form.elements.qty.value
```

![dev tools console](./Capture7.PNG)
