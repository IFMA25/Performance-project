## Profiling Results

### Interaction 1: Searching a country

- **Commit Duration:** 10.6ms => 5.4ms
- **Render Duration:**
  - Main: 2.7ms => 1.8ms
  - Header: 7.1ms => 2.6ms
  - App: 0.4ms => 0.7ms
- **Interactions:** Input change
- **Flamegraph:**

  _before:_

  ![Flame Graph chart](screnshots-profiler/image.png)

  _after:_

  ![Flame Graph chart](screnshots-profiler/image-8.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chartbe](screnshots-profiler/image-1.png)

  ![Ranked chartbe](screnshots-profiler/image-9.png)

---

### Interaction 2: Sorting a column

- **Commit Duration:** 157.5ms => 125.7ms
- **Render Duration:**
  - Main: 147.5ms => 116.1ms
  - Header: 16.2ms => 3.1ms
  - App: 0.5ms => 0.6ms

- **Interactions:** Select sort by population
- **Flamegraph:**

  _before:_

  ![Flame Graph chart before](screnshots-profiler/image-2.png)

  _after:_

  ![Flame Graph chart before](screnshots-profiler/image-11.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chart before](screnshots-profiler/image-3.png)

  _after:_

  ![Ranked chart before](screnshots-profiler/image-10.png)

---

### Interaction 3: Selecting another year

- **Commit Duration:** 152.6ms => 139.6ms
- **Render Duration:**
  - Main: 126.6ms => 131.4ms
  - Header: 7.3ms => 3.5ms
  - App: 0.7ms => 0.6ms
- **Interactions:** Click select and change year
- **Flamegraph:**

  _before:_

  ![Flame Graph chart before](screnshots-profiler/image-5.png)

  _after:_

  ![Flame Graph chart before](screnshots-profiler/image-12.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chart before](screnshots-profiler/image-4.png)

  _after:_

  ![Ranked chart before](screnshots-profiler/image-13.png)

---

### Interaction 4: Adding columns

- **Commit Duration:** 136.6ms => 135.4ms
- **Render Duration:**
  - Main: 101.9ms => 125.6ms
  - Header: 6ms => 3.5ms
  - App: 0.3ms => 0.5ms
- **Interactions:** Checkbox toggle
- **Flamegraph:**

  _before:_

  ![Flame Graph chart before](screnshots-profiler/image-6.png)

  _after:_

  ![Flame Graph chart before](screnshots-profiler/image-14.png)

- **Ranked Chart:**

  _before:_

  ![Ranked chart before](screnshots-profiler/image-7.png)

  _after:_

  ![Ranked chart before](screnshots-profiler/image-15.png)
