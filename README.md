## Profiling Results

### Interaction 1: Searching a country

- **Commit Duration:** 10.6ms
- **Render Duration:**
  - Main: 2.7ms
  - Header: 7.1ms
  - App: 0.4ms
- **Interactions:** Input change
- **Flamegraph:**

  _before:_

![Flame Graph chartbefore](screnshots-profiler/image.png)

- **Ranked Chart:**

  _before:_

![Ranked chartbefore](screnshots-profiler/image-1.png)

---

### Interaction 2: Sorting a column

- **Commit Duration:** 157.5ms
- **Render Duration:**
  - Main: 147.5ms
  - Header: 16.2ms
  - App: 0.5ms

- **Interactions:** Select sort by population
- **Flamegraph:**

  _before:_

![Flame Graph chart before](screnshots-profiler/image-2.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chart before](screnshots-profiler/image-3.png)

---

### Interaction 3: Selecting another year

- **Commit Duration:** 152.6ms
- **Render Duration:**
  - Main: 126.6ms
  - Header: 7.3ms
  - App: 0.7ms
- **Interactions:** Click select and change year
- **Flamegraph:**

  _before:_

  ![Flame Graph chart before](screnshots-profiler/image-5.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chart before](screnshots-profiler/image-4.png)

---

### Interaction 4: Adding columns

- **Commit Duration:** 136.6ms
- **Render Duration (главные компоненты):**
  - Main: 101.9ms
  - Header: 6ms
  - App: 0.3ms
- **Interactions:** Checkbox toggle
- **Flamegraph:**

  _before:_

  ![Flame Graph chart before](screnshots-profiler/image-6.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chart before](screnshots-profiler/image-7.png)
