# print("Har Har Mahadev")
# print("Om shai ram")
# print("Jai shreee Ram ")
# print("Jai bajarang Bali")
# print("Jai Mata Di")





    #python3.14.23 --version

# sugar_amount = 1
# print(f"Initial sugar: {sugar_amount}")
# sugar_amount=12
# print (f"Second Initial sugar: {sugar_amount }")
# print(f"ID of 2:{id(2)}")
# print(f"ID of 2:{id(12)}")

# spice_mix = set()
# print(f"Initial spice mixx id: {id(spice_mix)}")
# print(f"Initial spice mixx id: {id(spice_mix)}")
# spice_mix.add("cardamom")
# spice_mix.add("Ginger")
# spice_mix.add("brinjal")



# print(f"Initial  spice mix id: {id(spice_mix)}")
# print(f"After spice mix id: {id(spice_mix)}")


#Integer 
# black_tea_grams =14
# ginger_grams = 3
# total_grams = black_tea_grams + ginger_grams
# print(f"Total grams of base tea is {total_grams}")

# remaining_tea = black_tea_grams - ginger_grams
# print(f"Total grams of base tea is {remaining_tea}")


# milk_liters= 9
# serving =3
# milk_per_serving = milk_liters/serving

# print(f"Milk peer serving is:{ milk_per_serving }")
# total_tea_bags =5
# pots = 4
# bags_per_pots=total_tea_bags//pots
# print(f"Bags per pots: {bags_per_pots}")
# total_cadamom_pods =10
# pods_per_cup =3
# leftover_pods=total_cadamom_pods%pods_per_cup
# print(f"Leftover cadamom pods:{leftover_pods}")
# base_flavor_strength =2
# scale_factor =3
# powerfull_flavor = base_flavor_strength ** scale_factor
# print(f"scaled flavor strength { powerfull_flavor}")




#Boolean
# import sys
# is_boiling =True
# stri_count =5
# total_actions =stri_count + is_boiling
# print(f"Total actions : {total_actions}")
# milk_present =None
# print(f"Is there milk? {bool(milk_present)}")

# water_hot = True
# tea_added = True
# can_serve = water_hot and tea_added
# print(f"can serve chai ? {can_serve}")


# ideal_temp =95.5
# current_temp = 95.49999999
# print(f"Ideal temp {ideal_temp}")
# print(f"Current temp {current_temp}")
# print(f"Difference temp {ideal_temp - current_temp}")
# print(sys.float_info)




#String 
# chai_type = "ginger chai"
# customer_name = "priya"
# print(f"Oredr for Priya {customer_name} : {chai_type} Please !")
# chai_description ="Aromatic and Bold"
# print(f"First word : { chai_description[:8]}")
# print(f"Last word : { chai_description[12:]}")
# print(f"Last word : { chai_description[::-1]}")
# label_text = "chai special"
# ecoded_level = label_text.encode("utf-8")
# print(f"Encoded label:{label_text}")
# print(f"Encoded label:{ecoded_level}")



# masala_spices = ("cardamom", "cloves", "cinnamom")
# (spice1, spice2,spice3) = masala_spices
# print(f"Maiin masala spices : {spice1}, {spice2}, {spice3}")
# ginger_ratio, cardramom_ratio =2,1
# print(f"Ratio is G : {ginger_ratio} and C: {cardramom_ratio}")
# ginger_ratio, cadramom_ratio = cardramom_ratio, ginger_ratio
# print(f"Ratio is G : {ginger_ratio} and C : {cadramom_ratio}")


# ingredients = ["water","milk", "black tea"]
# ingredients.append("sugar")
# print(f"Ingredients are: {ingredients }")
# ingredients.remove("water")
# print(f"Ingredients are: {ingredients }")

# spice_options = ["ginger", "cardamom"]
# chai_ingredients = ["water", "milk"]
# chai_ingredients.extend(spice_options)
# print(f"chai: {chai_ingredients}")

# sugar_levels = [1,2,3,4,5]
# print(f"Maximum sugar level: {max(sugar_levels)}")
# print(f"Minimum sugar level: {min(sugar_levels)}")


# base_liquid = ["water", "milk"]
# extra_flavor = ["ginger","malai chap"]
# full_liquid_mix = base_liquid + extra_flavor*3
# print(f"liquid mix: { full_liquid_mix}")


# essential_spices = {"cardamom", "ginger", "cinnamon"}
# optional_spices = {"cloves", "ginger", "black pepper"}
# all_spices = essential_spices | optional_spices
# print(f"All speces : {all_spices}")
# common_spices = essential_spices & optional_spices
# print(f"common spices : {common_spices}")


#dictionary
# chai_order = dict(type="Masala chai", size="large", sugar=4)
# print(f"chai order: {chai_order}")
# chaii_recipe = {}
# chaii_recipe["base"] = "black tea"
# chaii_recipe["liquid"] = "milk"
# print(f"Recipe chai: {chaii_recipe['base']}")
# print(f"Recipe chai: {chaii_recipe}")

#datetime,time,calandar
# import arrow
# brewing_time = arrow.utcnow()
# brewing_time.to("Europe/Rome")
# from collections import namedtuple
# chaiProfile = namedtuple("chaiProfile",[ "flavor", "aroma"])
# prit(f"chai profile: {chaiProfile}")

# kettle_boiled = True
# if kettle_boiled:
#     print("kettle Done ! time to  make chai ")

# snack_one = {"samosa","pepsi"}
# snack_two = {"cookies","peties"}
# if snack_one:
#     print(f"your orgder is getting ready{snack_two}")



###Mini projects
# snack = input("Enter Your preffered snack: ").lower()
# if snack == "cookies" or snack == "samosa":
#     print(f"Greate Choice! We'l serve you {snack}")
# else:
#     print("sorry , we only serve cookies or samosa")


# cup= input("Enter your desire cup size that you to preffered: ").lower()
# if cup == "small" or cup == "midium " or cup == "large" :
#     print(f"Your order is process --> Size: {cup}")
# else:
#     print("Unknown cup size ! Please Enter the correct cup size ")

# cup = input("chose you cup size(small/medium/large):").lower()
# if cup == "small":
#     print("price is ₹10 ")

# elif cup == "medium":
#     print("price is ₹15 ")

# elif cup == "large":
#     print("price is ₹20 ")


