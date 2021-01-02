class Calendar {
    constructor(baseContainerId) {
      this.baseContainerId = baseContainerId;
      this.baseContainer = document.querySelectorAll(`[data-id="${baseContainerId}"]`);

      if (!this.baseContainer) {
        console.error('base container is not defined');
        return;
      }
  
      this.init();
    }
  
    init() {
        this.baseContainer.forEach(el => {
            el.innerHTML = `
                <div class="calendar calendar_size_mini">
                    <div class="calendar__inner">
                        <div class="calendar__body-wrapper">
                            <div class="calendar__header">
                                October 2020
                            </div>
                            <div class="calendar__body">
                                <div class="calendar__body-inner">
                                    <span class="calendar__item calendar__item_day">Mon</span>
                                    <span class="calendar__item calendar__item_day">Tue</span>
                                    <span class="calendar__item calendar__item_day">Wed</span>
                                    <span class="calendar__item calendar__item_day">Thu</span>
                                    <span class="calendar__item calendar__item_day">Fri</span>
                                    <span class="calendar__item calendar__item_day">Sat</span>
                                    <span class="calendar__item calendar__item_day">Sun</span>
                                    <span class="calendar__item"></span>
                                    <span class="calendar__item"></span>
                                    <span class="calendar__item"></span>
                                    <span class="calendar__item"></span>
                                    <span class="calendar__item"></span>
                                    <span class="calendar__item">1</span>
                                    <span class="calendar__item">2</span>
                                    <span class="calendar__item">3</span>
                                    <span class="calendar__item">4</span>
                                    <span class="calendar__item">5</span>
                                    <span class="calendar__item">6</span>
                                    <span class="calendar__item">7</span>
                                    <span class="calendar__item">8</span>
                                    <span class="calendar__item">9</span>
                                    <span class="calendar__item">10</span>
                                    <span class="calendar__item calendar__item_active">11</span>
                                    <span class="calendar__item calendar__item_between-active">12</span>
                                    <span class="calendar__item calendar__item_between-active">13</span>
                                    <span class="calendar__item calendar__item_between-active">14</span>
                                    <span class="calendar__item calendar__item_active">15</span>
                                    <span class="calendar__item">16</span>
                                    <span class="calendar__item">17</span>
                                    <span class="calendar__item">18</span>
                                    <span class="calendar__item">19</span>
                                    <span class="calendar__item">20</span>
                                    <span class="calendar__item">21</span>
                                    <span class="calendar__item">22</span>
                                    <span class="calendar__item">23</span>
                                    <span class="calendar__item">24</span>
                                    <span class="calendar__item">25</span>
                                    <span class="calendar__item">26</span>
                                    <span class="calendar__item">27</span>
                                    <span class="calendar__item">28</span>
                                    <span class="calendar__item">29</span>
                                    <span class="calendar__item">30</span>
                                    <span class="calendar__item">31</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
          });
    }
}

export default Calendar;