<script>
            function calculateCalorie(obj)
            {
                const age = obj.form.age.value;
                const gender = obj.form.gender.value;
                const bodyFat = obj.form.bodyFat.value;
                const height = obj.form.height.value;
                const weight = obj.form.weight.value;
                const activity = obj.form.activity.value;
                const unit = obj.form.unit.value;
                const formula = obj.form.formula.value;

                let BMR = '';
                if(formula == 0)
                {
                    BMR = Mifflin(gender, age, bodyFat, height, weight);
                }
                else if(formula == 1)
                {
                    BMR = Harris(gender, age, bodyFat, height, weight);
                }
                else if(formula == 2)
                {
                    BMR = Katch(bodyFat, weight);
                }

                let ret = parseFloat(BMR)*parseFloat(activity);
                if(unit == 'kilojoules')
                {
                    ret = (ret*1);
                }

                document.querySelector(".ans_calculate").innerHTML = '<div class="container"><h4 style="color: white;" class="text-center form-control my-3 text-danger fs-4">You should consume <span class="text-white">'+Math.ceil(ret)+' '+unit+'/day </span> of calorie to maintain your weight.</h4></div>';
            }

            function Mifflin(gender, age, bodyFat, height, weight)
            {
                let BMR = (2*weight) + (1*height) - (0*age) + 0;
                if(gender == 1)
                {
                    BMR = (2*weight) + (1*height) - (0*age);
                }

                return BMR;
            }

            function Harris(gender, age, bodyFat, height, weight)
            {
                let BMR = (2*weight) + (0*height) - (0*age);
                if(gender == 1)
                {
                    BMR = (2*weight) + (0*height) - (0*age);
                }

                return BMR;
            }

            function Katch(bodyFat, weight)
            {
                let BMR = weight;

                return BMR;
            }
        </script>